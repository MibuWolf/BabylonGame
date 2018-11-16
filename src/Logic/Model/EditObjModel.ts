import { MeshInfo } from '../../WebNetMessage/WebNetMessage';

export class EditObjModel
{
    private static instance: EditObjModel = new EditObjModel();

    private meshInfo: MeshInfo;
    private constructor()
    {

    }


    public static GetInstance(): EditObjModel
    {
        return EditObjModel.instance;
    }




};
