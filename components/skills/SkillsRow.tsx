import Image from 'next/image';
import { Skill } from './skillsData';

type Props = {
    skills: Skill[],
}

const SkillsRow = ({ skills }: Props) => (
    <div className="flex flex-wrap mt-5">
        {skills.map(({ icon, alt }, index) => (
            <div key={index} className="inline-grid grid-cols-1 mb-5 mr-10 text-sm text-center transition duration-200 rounded-lg hover:scale-105 ease">
                <Image
                    src={icon}
                    quality={1}
                    alt={`${alt} icon`}
                    width={80}
                    height={80}
                />
                <span className="mt-2 truncate">{alt}</span>
            </div>
        ))}
    </div>
);

export default SkillsRow;
