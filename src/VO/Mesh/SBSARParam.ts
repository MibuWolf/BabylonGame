
export enum SBSARParamType
{
    TYPE_NONE,
    TYPE_BOOL,
    TYPE_INT1,
    TYPE_INT2,
    TYPE_INT3,
    TYPE_INT4,
    TYPE_FLOAT1,
    TYPE_FLOAT2,
    TYPE_FLOAT3,
    TYPE_FLOAT4,
    TYPE_STRING
}
export class SBSARParam
{
    public sbsarName: string = "";
    public paramName: string = "";
    public paramType: SBSARParamType = SBSARParamType.TYPE_NONE;
    public defaultValue: any = null;
    public minValue: any = null;
    public maxValue: any = null;
    public value: any = null;
    public constructor()
    {

    }



};
