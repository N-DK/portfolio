import { request } from "@/lib";
import type {
  IMDbName,
  BatchGetNamesParams,
  BatchGetNamesResponse,
  ListNameImagesParams,
  ListNameImagesResponse,
  ListNameFilmographyParams,
  ListNameFilmographyResponse,
  ListNameRelationshipsResponse,
  ListNameTriviaParams,
  ListNameTriviaResponse,
  ListStarMetersParams,
  ListStarMetersResponse,
} from "./type";

const NAME_API = {
  GET_NAME: (nameId: string) => `/names/${nameId}`,
  BATCH_GET_NAMES: "/names:batchGet",
  LIST_IMAGES: (nameId: string) => `/names/${nameId}/images`,
  LIST_FILMOGRAPHY: (nameId: string) => `/names/${nameId}/filmography`,
  LIST_RELATIONSHIPS: (nameId: string) => `/names/${nameId}/relationships`,
  LIST_TRIVIA: (nameId: string) => `/names/${nameId}/trivia`,
  LIST_STAR_METERS: "/chart/starmeter",
};

const getName = async (nameId: string) => {
  return request<IMDbName>(NAME_API.GET_NAME(nameId), null, { method: "GET" });
};

const batchGetNames = async (params: BatchGetNamesParams) => {
  return request<BatchGetNamesResponse>(NAME_API.BATCH_GET_NAMES, params, {
    method: "GET",
  });
};

const listNameImages = async (
  nameId: string,
  params?: ListNameImagesParams,
) => {
  return request<ListNameImagesResponse>(NAME_API.LIST_IMAGES(nameId), params, {
    method: "GET",
  });
};

const listNameFilmography = async (
  nameId: string,
  params?: ListNameFilmographyParams,
) => {
  return request<ListNameFilmographyResponse>(
    NAME_API.LIST_FILMOGRAPHY(nameId),
    params,
    { method: "GET" },
  );
};

const listNameRelationships = async (nameId: string) => {
  return request<ListNameRelationshipsResponse>(
    NAME_API.LIST_RELATIONSHIPS(nameId),
    null,
    { method: "GET" },
  );
};

const listNameTrivia = async (
  nameId: string,
  params?: ListNameTriviaParams,
) => {
  return request<ListNameTriviaResponse>(NAME_API.LIST_TRIVIA(nameId), params, {
    method: "GET",
  });
};

const listStarMeters = async (params?: ListStarMetersParams) => {
  return request<ListStarMetersResponse>(NAME_API.LIST_STAR_METERS, params, {
    method: "GET",
  });
};

const nameServices = {
  getName,
  batchGetNames,
  listNameImages,
  listNameFilmography,
  listNameRelationships,
  listNameTrivia,
  listStarMeters,
};

export default nameServices;
