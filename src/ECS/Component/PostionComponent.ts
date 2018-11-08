export class PostionComponent
{

    private posX: number;
    private posY: number;
    private posZ: number;

    public constructor()
    {

    }


    /**
     * Initialize
     */
    public Initialize( x: number = 0.0, y: number = 0.0, z: number = 0.0 )
    {
        this.posX = x;
        this.posY = y;
        this.posZ = z;
    }


    /**
     * GetPositionX
        获取X轴坐标
     */

    public GetPositionX(): number
    {
        return this.posX;
    }


    /**
    * GetPositionY
        获取Y轴坐标
    */

    public GetPositionY(): number
    {
        return this.posY;
    }


    /**
    * SetPosition
        获取Z轴坐标
    */

    public GetPositionZ(): number
    {
        return this.posZ;
    }


    /**
    * SetPosition
        获取Z轴坐标
    */

    public SetPosition( x: number, y: number, z: number ): void
    {
        this.posX = x;
        this.posY = y;
        this.posZ = z;
    }
}