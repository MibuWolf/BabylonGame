export class MeshData
{
    public meshPath: string = "";
    public posX: number = 0.0;
    public posY: number = 0.0;
    public posZ: number = 0.0;

    public constructor()
    {

    }

    /**
     * Initialize
     */
    public Initialize( path: string = "", x: number = 0.0, y: number = 0.0, z: number = 0.0 )
    {
        this.meshPath = path;
        this.posX = x;
        this.posY = y;
        this.posZ = z;
    }

}