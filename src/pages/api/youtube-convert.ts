// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';

type ReturnedData = {
  errorMessage?: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    audioUrl: string;
    bitRate: number;
    format: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<ReturnedData>,
) {
  if (req.method === 'POST') {
    // return res.status(400).json({
    //   errorMessage: 'testing error',
    // });
    const url = req.body.audioUrl;

    // Download video from YouTube
    const video = ytdl(url, { filter: 'audioonly' }).on('error', (err) => {
      console.error(err);
      console.log('unable to open');
      res.status(400).json({
        errorMessage: 'This is not available. Please make the link is correct.',
      });
    });
    // .on('progress', (a, b, c) => {
    //   console.log(a, b, c);
    // });

    // Check the size of video (Not accept video that longer than 10 mins)
    const basicInfo = await ytdl.getInfo(url).then((response) => {
      if (Number(response.videoDetails.lengthSeconds) >= 600) {
        res.status(400).json({
          errorMessage: 'Video is too large. Please choose a shorter video',
        });
      }
      return response;
    });
    // 3403821
    // 17941486
    const title = basicInfo.player_response.videoDetails.title;
    console.log(basicInfo.formats[0]);

    // Remove all the invalid character
    const transTitle =
      title && title.replace(/\\|\/|\:|\*|\?|\"|\<|\>|\|/g, ' ');

    // Set the ffmpeg path in case it cannot transform the format of video
    ffmpeg.setFfmpegPath(ffmpegPath.path);

    // Set the response header, put the video title into header
    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Content-Disposition': `attachment; filename=${encodeURIComponent(
        `${transTitle}.${req.body.format}`,
      )}`,
      durationInSecond: Number(basicInfo.formats[0].approxDurationMs) / 1000,
    });

    // Convert video to required audio format (MP3/M4A)
    const audio = ffmpeg(video)
      .audioBitrate(Number(req.body.bitRate))
      .noVideo()
      .on('error', (err) => {
        console.log('error: ', err);
        res.status(500).json({
          errorMessage: JSON.stringify(err),
        });
      });
    // .on('progress', (progress) => {
    //   console.log(progress);
    // });

    // Directly pipe the stream if the type is MP3
    if (req.body.format === 'mp3') {
      return audio
        .format(req.body.format)
        .on('end', () => {
          console.log(`Conversion is completed for url: ${url}`);
        })
        .pipe(res, { end: true });
    } else {
      audio
        .save(`download/${req.body.format}/${transTitle}.${req.body.format}`)
        .on('end', async () => {
          const stream = fs.createReadStream(
            `download/${req.body.format}/${transTitle}.${req.body.format}`,
          );

          return await new Promise(function (resolve) {
            stream.pipe(res);

            stream.on('end', () => {
              fs.unlinkSync(
                `download/${req.body.format}/${transTitle}.${req.body.format}`,
              );
              console.log(`Conversion is completed for url: ${url}`);
            });
          });
        });
    }
  }
}
