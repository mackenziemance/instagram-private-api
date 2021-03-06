import { Repository } from '../core/repository';
import { FriendshipRepositoryShowResponseRootObject } from '../responses';
import { SetBestiesInput } from '../types';
export declare class FriendshipRepository extends Repository {
    show(id: string | number): Promise<FriendshipRepositoryShowResponseRootObject>;
    showMany(userIds: string[] | number[]): Promise<any>;
    block(id: string | number, mediaIdAttribution?: string): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    unblock(id: string | number, mediaIdAttribution?: string): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    create(id: string | number, mediaIdAttribution?: string): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    destroy(id: string | number, mediaIdAttribution?: string): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    approve(id: string | number, mediaIdAttribution?: string): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    deny(id: string | number, mediaIdAttribution?: string): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    removeFollower(id: string | number): Promise<import("instagram-private-api/src/responses").FriendshipRepositoryChangeResponseFriendship_status>;
    private change;
    setBesties(input?: SetBestiesInput): Promise<Record<string, import("instagram-private-api/src/responses").FriendshipRepositorySetBestiesResponseRootObject_status>>;
}
