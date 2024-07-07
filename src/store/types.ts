import type { CommitOptions, Payload } from "vuex";

export interface Commit {
    (type: string, payload?: any, options?: CommitOptions): void;
    <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export interface Action {
    commit: Commit;
}