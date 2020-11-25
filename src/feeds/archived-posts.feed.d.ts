import { Feed } from '../core/feed';
export declare class ArchivedPostsFeed extends Feed<any, any> {
    private nextMaxId;
    set state(body: any);
    request(): Promise<any>;
    items(): Promise<any[]>;
}
