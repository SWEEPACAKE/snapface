export class FaceSnapModel {
    title: string;
    description: string;
    createdAt: Date;
    snaps: number;
    imageUrl: string;
    hasSnapped: boolean;

    constructor(title: string, description: string, createdAt: Date, snaps: number, imageUrl: string) {
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.snaps = snaps;
        this.imageUrl = imageUrl;
        this.hasSnapped = false;
    }
}