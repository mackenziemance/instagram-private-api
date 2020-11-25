/// <reference types="node" />
import { Entity } from '../core/entity';
import { DirectThreadBroadcastPhotoOptions, DirectThreadBroadcastPhotoStoryOptions, DirectThreadBroadcastReelOptions, DirectThreadBroadcastVideoOptions, DirectThreadBroadcastVideoStoryOptions, DirectThreadBroadcastVoiceOptions } from '../types';
export declare class DirectThreadEntity extends Entity {
    threadId: string;
    userIds: string[];
    deleteItem(itemId: string | number): Promise<import("instagram-private-api/src").StatusResponse>;
    broadcastText(text: string): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastReel(options: DirectThreadBroadcastReelOptions): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastUserStory(options: DirectThreadBroadcastReelOptions): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastProfile(id: number | string): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastLink(link_text: string, link_urls: string[]): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastPhoto(options: DirectThreadBroadcastPhotoOptions): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastPost(mediaId: string): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastVideo(options: DirectThreadBroadcastVideoOptions): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastVoice(options: DirectThreadBroadcastVoiceOptions): Promise<import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponseRootObject | import("instagram-private-api/src").DirectThreadRepositoryBroadcastResponsePayload>;
    broadcastStory(input: Buffer | DirectThreadBroadcastPhotoStoryOptions | DirectThreadBroadcastVideoStoryOptions): Promise<any>;
    updateTitle(title: string): Promise<import("instagram-private-api/src").DirectThreadRepositoryUpdateTitleResponseRootObject>;
    mute(): Promise<import("instagram-private-api/src").StatusResponse>;
    unmute(): Promise<import("instagram-private-api/src").StatusResponse>;
    hide(): Promise<import("instagram-private-api/src").StatusResponse>;
    leave(): Promise<import("instagram-private-api/src").StatusResponse>;
    addUser(userIds: string[] | number[]): Promise<import("instagram-private-api/src").DirectThreadRepositoryAddUserResponseRootObject>;
    markItemSeen(threadItemId: string): Promise<import("instagram-private-api/src").StatusResponse>;
    private broadcast;
}
