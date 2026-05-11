import { IMDbImage, IMDbName } from "@/services";

export type Cast = IMDbName;

export interface TrackedItem {
    id: string;
    slug: string;
    title: string;
    image?: IMDbImage;
    type: 'MOVIE' | 'TV_SERIES' | 'EPISODE';
    timestamp: number;
    rating?: number;
    year?: number;
    genres?: string[];
    season?: string;
    episodeNumber?: number;
    parentTitle?: string;
    parentSlug?: string;
    runtime?: number;
    plot?: string;
}
