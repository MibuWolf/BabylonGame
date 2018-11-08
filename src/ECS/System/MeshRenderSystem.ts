import { ListIteratingSystem } from '../../ash';
import { MeshRenderNode } from '../Nodes/MeshRenderNode';
import { SceneManager } from '../../Manager/SceneManager';
import 'babylonjs-loaders';
import { SceneLoader, PBRMetallicRoughnessMaterial, Texture, Color3 } from 'babylonjs';

export class MeshRenderSystem extends ListIteratingSystem<MeshRenderNode>
{
    constructor()
    {
        super( MeshRenderNode );
    }

    public nodeAdded( node: MeshRenderNode ): void
    {
        var scene = SceneManager.GetInstance().GetScene();

        if ( scene == null )
        {
            console.log( "SceneManaer is Not init!" );
            return;
        }

        SceneLoader.ImportMesh( "", node.mesh.GetResPath(), node.mesh.GetMeshName(), scene, function ( newMeshes )
        {

            var meshModel = newMeshes[ 0 ];

            if ( meshModel != null )
            {
                var pbrMetMat = new PBRMetallicRoughnessMaterial( "pbrmet", scene );
                pbrMetMat.wireframe = false;
                pbrMetMat.doubleSided = true;
                pbrMetMat.baseTexture = new Texture( node.mesh.GetResPath() + node.mesh.GetBaseTexture(), scene );
                pbrMetMat.normalTexture = new Texture( node.mesh.GetResPath() + node.mesh.GetNormalTexture(), scene );
                pbrMetMat.metallicRoughnessTexture = new Texture( node.mesh.GetResPath() + node.mesh.GetMetroughTexture(), scene );
                //pbrMetMat.environmentTexture = new Texture( node.mesh.GetResPath() + node.mesh.GetEnvironmentTexture(), scene );
                //pbrMetMat.emissiveColor = new Color3( 10, 10, 10 );
                //pbrMetMat.emissiveTexture = new Texture( node.mesh.GetResPath() + "Default_emissive.jpg", scene );
                //pbrMetMat.occlusionTexture = new Texture( node.mesh.GetResPath() + "Default_AO.jpg", scene );


                meshModel.material = pbrMetMat;
                meshModel.position.x = node.pos.GetPositionX();
                meshModel.position.y = node.pos.GetPositionY();
                meshModel.position.z = node.pos.GetPositionZ();
                node.mesh.SetMeshModel( meshModel );
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

    public nodeRemoved( node: MeshRenderNode ): void
    {

    }
    public updateNode( node: MeshRenderNode, delta: number ): void { }
}