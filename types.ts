import { StaticImageData } from 'next/image';

export enum eEntrerprises {
    ezgmz = 'ezgmz',
    anincubator = 'anincubator',
    servisenior = 'servisenior',
    wadara = 'wadara',
    brocsoft = 'brocsoft',
    matic = 'matic',

}

export type TEnterprise = {
    slug: eEntrerprises,
    logo: StaticImageData,
};
