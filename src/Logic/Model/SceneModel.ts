
export class SceneService
{
    private static instance: SceneService = new SceneService();

    private constructor()
    {

    }


    public static GetInstance(): SceneService
    {
        return SceneService.instance;
    }



};
