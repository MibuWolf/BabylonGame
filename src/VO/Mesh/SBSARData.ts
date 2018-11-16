import { SBSARParam } from './SBSARParam';

export class SBSARData
{
    public sbsarName: string = "";
    public sbsarParams: Map<string, SBSARParam> = null;
    public constructor()
    {
        this.sbsarParams = new Map<string, SBSARParam>();
    }

};
