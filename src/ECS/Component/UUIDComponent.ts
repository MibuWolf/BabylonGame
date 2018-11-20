export class UUIDComponent
{
    public uUid: string;

    public constructor()
    {

    }

    /**
     * Initialize
     */
    public Initialize( id: string )
    {
        this.uUid = id;
    }


    public Equal( id: string ): boolean
    {
        return ( this.uUid == id );
    }

}