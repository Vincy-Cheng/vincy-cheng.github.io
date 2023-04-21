import React from 'react';
import { DateTime } from 'luxon';
import Accordion from '../../components/Accordion';
import { SkillType, skills } from './hard-code-data';

type Props = {};
const Experience = (props: Props) => {
  return (
    <div className="w-full">
      <div className="dark:text-secondary-50 text-secondary-900 w-full space-y-2">
        <p className="text-lg border-b border-primary-500 font-bold">
          Skill experiences
        </p>
        {Object.values(SkillType).map((value) => (
          <Accordion header={value} key={'experience-accordion-' + value}>
            <table className="min-w-[600px] w-full table-fixed overflow-auto relative border-separate">
              <tr className="text-left">
                <th className="grow">{value}</th>
                <th className="w-[20%]">Level</th>
                <th className="w-[20%]">Start date</th>
                <th className="w-[20%] text">Around year</th>
              </tr>
              {skills
                .filter((skill) => skill.type === value)
                .map((skill) => (
                  <tr key={skill.name}>
                    <td>{skill.name}</td>
                    <td>{skill.level}</td>
                    <td>
                      {DateTime.fromJSDate(skill.startTime).toFormat(
                        'yyyy-LL-dd',
                      )}
                    </td>
                    <td>
                      {skill.around.type} {skill.around.year}
                    </td>
                  </tr>
                ))}
            </table>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Experience;
