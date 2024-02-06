import React from 'react';
import { DateTime } from 'luxon';
import Accordion from '../../components/Accordion';
import { skills, works } from '../../hard-code.data.ts/experience.data';
import { ESkillType } from '../../types';

type Props = {};
const Experience = (props: Props) => {
  return (
    <div className="w-full">
      <div className="w-full space-y-2">
        <div className="space-y-2">
          <p className="text-lg border-b border-primary-500 font-bold">
            Skill experiences
          </p>
          {Object.values(ESkillType).map((value) => (
            <Accordion header={value} key={'experience-accordion-' + value}>
              <table className="min-w-[600px] w-full table-fixed overflow-auto relative border-separate text-primary-800 dark:text-primary-100">
                <thead>
                  <tr className="text-left">
                    <th className="grow">{value}</th>
                    <th className="w-[30%]">Level</th>
                    <th className="w-[30%] text">Around year</th>
                  </tr>
                </thead>
                <tbody>
                  {skills
                    .filter((skill) => skill.type === value)
                    .map((skill) => (
                      <tr key={skill.name}>
                        <td>{skill.name}</td>
                        <td>{skill.level}</td>
                        <td>
                          {skill.around.type} {skill.around.year}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </Accordion>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-lg border-b border-primary-500 font-bold ">
            Work experiences
          </p>
          {works.map((work) => (
            <Accordion
              header={work.company}
              key={'work-experience-accordion-' + work.company}
            >
              <div className="overflow-auto space-y-2">
                <div className="sm:flex sm:justify-between pt-2">
                  <p className="">{work.position}</p>
                  <p className="sm:dark:text-secondary-50 sm:text-secondary-900 text-secondary-500">
                    {DateTime.fromJSDate(work.startDate).toFormat('yyyy-LL-dd')}
                    {' - '}
                    {Math.floor(
                      Math.abs(
                        DateTime.fromJSDate(work.endDate)
                          .diff(DateTime.now(), 'day')
                          .toObject().days ?? 0,
                      ),
                    ) === 0
                      ? 'present'
                      : DateTime.fromJSDate(work.endDate).toFormat(
                          'yyyy-LL-dd',
                        )}
                  </p>
                </div>

                <ul className="list-disc list-inside">
                  {work.description.map((value, index) => (
                    <li key={'description' + index}>{value}</li>
                  ))}
                </ul>
                <div>
                  {work.tags.length > 0 && (
                    <p className="text-[#2461A6] font-thin">
                      #{work.tags.join('#')}
                    </p>
                  )}
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
