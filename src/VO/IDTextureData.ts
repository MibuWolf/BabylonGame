export class IDTextureData
{
    public idTexID: string;
    public idTexPath: string;

    public constructor( id: string = "", path: string = "" )
    {
        this.Initialize( id, path );
    }

    /**
     * Initialize
     */
    public Initialize( id: string = "", path: string = "" )
    {
        this.idTexID = id;
        this.idTexPath = path;
    }


}