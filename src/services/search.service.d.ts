import { Repository } from '../core/repository';
export declare class SearchService extends Repository {
    blended(query: string): Promise<import("instagram-private-api/src").FbsearchRepositoryTopsearchFlatResponseListItem[]>;
    blendedItems(query: string): Promise<(import("instagram-private-api/src").FbsearchRepositoryTopsearchFlatResponsePlace | import("instagram-private-api/src").FbsearchRepositoryTopsearchFlatResponseHashtag | import("instagram-private-api/src").FbsearchRepositoryTopsearchFlatResponseUser)[]>;
    users(query: string): Promise<import("instagram-private-api/src").UserRepositorySearchResponseUsersItem[]>;
    tags(query: string): Promise<import("instagram-private-api/src").TagRepositorySearchResponseResultsItem[]>;
    places(query: string): Promise<import("instagram-private-api/src").FbsearchRepositoryPlacesResponseItemsItem[]>;
    location(latitude: number, longitude: number, query?: string): Promise<import("instagram-private-api/src").LocationRepositorySearchResponseVenuesItem[]>;
}
