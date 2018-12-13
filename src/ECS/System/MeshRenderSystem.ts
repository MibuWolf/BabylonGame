import { ListIteratingSystem } from '../../ash';
import { MeshRenderNode } from '../Nodes/MeshRenderNode';
import { SceneManager } from '../../Manager/SceneManager';
import 'babylonjs-loaders';
import { SceneLoader, AbstractMesh } from 'babylonjs';

export class MeshRenderSystem extends ListIteratingSystem<MeshRenderNode>
{
    constructor()
    {
        super( MeshRenderNode );
    }
    protected nodeAdded = ( node: MeshRenderNode ): void =>
    {
        var scene = SceneManager.GetInstance().GetScene();

        if ( scene == null || !node.mesh.IsValid() )
        {
            console.log( "Data is Not init!" );
            return;
        }

        SceneLoader.ImportMesh( "", node.mesh.GetMeshPath(), node.mesh.GetMeshName(), scene, function ( newMeshes )
        {
            let meshModel: AbstractMesh = newMeshes[ 0 ];

            let count = newMeshes.length;

            for ( let i = 0; i < count; ++i )
            {
                let mesh: AbstractMesh = newMeshes[ i ];

                if ( mesh != null && mesh.subMeshes != null )
                    meshModel = mesh;
            }

            console.log( "MeshRenderSystem ================================= ImportMesh Path: " + node.mesh.GetMeshPath() + "  Name: " + node.mesh.GetMeshName() );
            if ( meshModel != null )
            {
                meshModel.position.x = node.mesh.GetPositionX()
                meshModel.position.y = node.mesh.GetPositionY();
                meshModel.position.z = node.mesh.GetPositionZ();
                node.mesh.mesh = meshModel;

                // let stdMat: StandardMaterial = new StandardMaterial( "aaa", scene );
                // stdMat.diffuseTexture = new Texture( "http://172.16.1.150/resource/obj_file?obj_id=78805a221a988e79ef3f42d7c5bfd418", scene );//"http://172.16.1.110/bin/dist/Asset/male_sd_0001_tunic_male_sd_0001_tunic_spec.bmp", scene );
                // node.mesh.mesh.material = stdMat;
            }
            else
            {
                console.log( "Cannot Find Mesh!" )
            }

        }, function ( eve ) { },

            function ( scene, message, exc )
            {
                console.log( message )
                console.log( exc )
            }
        );
    }


    protected nodeRemoved = ( node: MeshRenderNode ): void =>
    {
        if ( node.mesh.mesh == null )
            return;

        node.mesh.mesh.dispose( false, true );
        node.mesh.mesh = null;
    }
    public updateNode( node: MeshRenderNode, delta: number ): void { }
}