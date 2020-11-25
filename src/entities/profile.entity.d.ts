import { Entity } from '../core/entity';
export declare class ProfileEntity extends Entity {
    pk: string | number;
    checkFollow(): Promise<import("instagram-private-api/src").FriendshipRepositoryChangeResponseFriendship_status>;
    checkUnfollow(): Promise<import("instagram-private-api/src").FriendshipRepositoryChangeResponseFriendship_status>;
}
