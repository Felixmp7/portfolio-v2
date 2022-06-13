import { StaticImageData } from 'next/image';

export enum eEntrerprises {
    ezgmz = 'ezgmz',
    anincubator = 'anincubator',
    servisenior = 'servisenior',
    wadara = 'wadara',
    brocsoft = 'brocsoft'

}

// type TImageFormat = {
//     name: string,
//     hash: string,
//     ext: string,
//     mime: string,
//     path: null,
//     width: number,
//     height: number,
//     size: number,
//     url: string
// }

// export type TImage = {
//     id: number,
//     attributes: {
//         name: string,
//         alternativeText: string,
//         caption: string,
//         width: number,
//         height: number,
//         formats: {
//             thumbnail: TImageFormat,
//             large: TImageFormat,
//             medium: TImageFormat,
//             small: TImageFormat
//         },
//         hash: string,
//         ext: string,
//         mime: string,
//         size: number,
//         url: string,
//         previewUrl: null,
//         provider: string,
//         provider_metadata: null,
//         createdAt: string,
//         updatedAt: string
//     },
// }

// export type TLatestWork = {
//     id: number,
//     attributes: {
//         images: {
//             data: TImage[]
//         }
//     }
// }

// export type TStrapiResponse = {
//     data: TLatestWork[],
//     meta: never,
//     error?: {
//         status: number
//     }
// }

export type TEnterprise = {
    slug: eEntrerprises,
    logo: StaticImageData,
};
