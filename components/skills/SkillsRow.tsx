import Image from 'next/image';
import { Skill } from './skillsData';

type Props = {
    skills: Skill[],
}

const SkillsRow = ({ skills }: Props) => (
    <div className="grid grid-cols-2 my-5 place-items-center mobileLg:flex mobileLg:flex-wrap mobileLg:justify-start">
        {skills.map(({ icon, alt }, index) => (
            <div key={index} className="flex flex-col mb-5 text-sm text-center transition duration-200 rounded-lg mobileLg:mr-10 hover:scale-105 ease">
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
