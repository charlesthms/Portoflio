import { ImageConfig } from "next/dist/shared/lib/image-config";

interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface HeaderInfos extends SanityBody {
    _type: "header";
    description: string;
    profile_pic: Image;
    cv: File;
}

export interface ProjectBody extends SanityBody {
    title: string;
    description: string;
    github: string;
    live: string;
    techs: string[];
}

export interface Project extends ProjectBody {
    _type: "projects";
}

export interface Work extends ProjectBody {
    _type: "work";
    category: string;
    img: Image;
}

export interface Skill extends ProjectBody {
    _type: "skill";
    name: string;
    picture: Image;
}