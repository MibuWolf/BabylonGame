import { SBSARData } from "./SBSARData";

export class IDTextureData
{
    public texIDName: string = "";
    public sbsars: Map<string, SBSARData> = null;
    public constructor()
    {
        this.sbsars = new Map<string, SBSARData>();
    }

};
