import React, { useState } from 'react';
import { EAudioBitRate, EAudioType } from '../../types';
import { Download, Upload } from 'tabler-icons-react';
import CustomSelector from '../../components/CustomSelector';
import CustomAlert from '../../components/CustomAlert';
import clsx from 'clsx';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import BackIconButton from '../../components/BackIconButton';
import { useRouter } from 'next/router';

type Props = {};

const YouTubeConverter = (props: Props) => {
  const router = useRouter();
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [progress, setProgress] = useState<number>(0);
  const [readyAudioUrl, setReadyAudioUrl] = useState<{
    url: string;
    name?: string;
  }>({ url: '' });

  const [error, setError] = useState<string>('');

  const [bitRate, setBitRate] = useState<EAudioBitRate>(EAudioBitRate.LOWEST);
  const [audioFormat, setAudioFormat] = useState<EAudioType>(EAudioType.m4a);

  const { mutate: handleSubmit, isLoading } = useMutation<
    AxiosResponse<Blob>,
    AxiosError<{ errorMessage: string }>
  >({
    mutationFn: () =>
      axios.post(
        '/api/youtube-convert',
        {
          audioUrl,
          bitRate: bitRate,
          format: audioFormat,
        },
        {
          onDownloadProgress(progressEvent) {
            const duration = (
              progressEvent.event as any
            ).srcElement.getResponseHeader('durationInSecond');

            // Audio file size equation: ((bit rate in kbps) * (length of the audio in sec)) / 8 = (in Byte)
            const expectedLength = ((128 * Number(duration)) / 8) * 1000;

            console.log(progressEvent.loaded / expectedLength);
            setProgress(
              progressEvent.loaded / expectedLength > 1
                ? 1
                : progressEvent.loaded / expectedLength,
            );
          },
          responseType: 'blob',
        },
      ),
    onSuccess(data, variables, context) {
      // Extract the file name from the header
      const [, filename] =
        data.headers['content-disposition'].split('filename=');
      // Form the audio file from stream
      const blob = new Blob([data.data]);
      const blobUrl = URL.createObjectURL(blob);
      setReadyAudioUrl({ url: blobUrl, name: decodeURIComponent(filename) });
      setAudioUrl('');
      setError('');
      setProgress(0);
    },
    onError(error, variables, context) {
      setReadyAudioUrl({ url: '' });
      setError(error.response?.data.errorMessage ?? 'Video conversion failed.');
      setProgress(0);
    },
  });

  // const handleSubmit = async (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  // ) => {
  //   event.preventDefault();

  //   const url = audioUrl;
  //   if (url) {
  //     // Make POST request to server to convert YouTube video
  //     setIsLoading(true);
  //     const response: Response = await fetch('/api/youtube-convert', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ url, bitRate: 128, format: 'mp3' }),
  //     });
  //     if (response.ok) {
  //       // Extract the file name from the header
  //       const [, filename] =
  //         response.headers.get('content-disposition')?.split('filename=') ?? [];

  //       // Form the audio file from stream
  //       const blob = await response.blob();
  //       console.log(blob);
  //       const url = URL.createObjectURL(blob);
  //       setReadyAudioUrl({ url, name: decodeURIComponent(filename) });
  //       setAudioUrl('');
  //       setError('');
  //     } else {
  //       setReadyAudioUrl({ url: '' });
  //       setError(await response.json());
  //     }
  //     setIsLoading(false);
  //   } else {
  //     setError('Please input the target YouTube URL');
  //   }
  // };

  return (
    <div>
      <div className="flex gap-2 items-center">
        <BackIconButton router={router} />
        <p className="text-xl">YouTube Converter</p>
      </div>
      {error && <CustomAlert type="error" content={error} />}

      <div className="pt-2 flex flex-col gap-2">
        <div className="">
          <input
            value={audioUrl}
            className="w-full bg-transparent border border-secondary-300 rounded-md py-1 px-2 placeholder:text-secondary-200 outline-none"
            placeholder="YouTube URL: "
            type="text"
            name="url"
            onChange={(e) => {
              setAudioUrl(e.target.value);
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <CustomSelector
            title="audioType"
            options={Object.values(EAudioType)}
            placeholder="Enter Testings"
            filter
            value={audioFormat}
            setValue={setAudioFormat}
          />
          <CustomSelector
            title="bitRate"
            options={Object.values(EAudioBitRate)}
            value={bitRate}
            setValue={setBitRate}
          />
        </div>
        <div className="flex items-center gap-2">
          <button
            className={clsx(
              'rounded-lg p-2  flex gap-1 items-center text-secondary-50  select-none',
              isLoading
                ? 'dark:bg-secondary-500 dark:hover:bg-secondary-600 dark:active:bg-secondary-400  bg-secondary-400 hover:bg-secondary-500 active:bg-secondary-300'
                : 'dark:bg-primary-500 dark:hover:bg-primary-600 dark:active:bg-primary-400 bg-primary-400 hover:bg-primary-500 active:bg-primary-300',
            )}
            onClick={(e) => {
              e.preventDefault();
              if (audioUrl) {
                handleSubmit();
              } else {
                setError('Please input the target YouTube URL');
              }
            }}
          >
            <Upload className="scale-90" />
            Convert
          </button>

          <div
            className={clsx(
              'text-secondary-50 flex items-center gap-2 rounded-md p-2',

              isLoading || !readyAudioUrl.url
                ? 'dark:bg-secondary-500 dark:hover:bg-secondary-600 dark:active:bg-secondary-400  bg-secondary-400 hover:bg-secondary-500 active:bg-secondary-300'
                : 'dark:bg-primary-500 dark:hover:bg-primary-600 dark:active:bg-primary-400 bg-primary-400 hover:bg-primary-500 active:bg-primary-300',
            )}
          >
            {isLoading ? (
              <>
                <span>{(progress * 100).toFixed(2) + '%'}</span>
                <div
                  className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
                </div>
              </>
            ) : (
              <Download />
            )}

            <a
              href={readyAudioUrl.url}
              download={readyAudioUrl.name}
              className={clsx('select-none', {
                ['pointer-events-none']: isLoading || !readyAudioUrl.url,
              })}
            >
              Download Audio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeConverter;
