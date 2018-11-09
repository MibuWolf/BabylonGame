export class EditorComponent
{

    private meshEditor: boolean;
    private controlEdior: boolean;

    public constructor()
    {
        this.meshEditor = true;
        this.controlEdior = true;
    }


    /**
     * Initialize
     */
    public Initialize( bMeshEditor: boolean = true, bControlEditor: boolean = true )
    {
        this.meshEditor = bMeshEditor;
        this.controlEdior = bControlEditor;
    }


    /**
     * CanShowMeshEditor
     */
    public CanShowMeshEditor(): boolean
    {
        return this.meshEditor;
    }



    /**
    * CanShowControlEdior
    */
    public CanShowControlEdior(): boolean
    {
        return this.controlEdior;
    }
}