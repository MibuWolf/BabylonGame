import { Engine, Entity } from '../ash';
import { MeshRenderSystem } from '../ECS/System/MeshRenderSystem';
import { MeshComponent } from '../ECS/Component/MeshComponent';
import { ComponentPool } from '../ash/tools/ComponentPool';
import { PostionComponent } from '../ECS/Component/PostionComponent';
import { TextureComponent } from '../ECS/Component/TextureComponent';
import { TextureRenderSystem } from '../ECS/System/TextureRenderSystem';
import { TextureData } from '../ECS/VO/TextureData';

export class WebNetManager
{
    private static instance: WebNetManager = new WebNetManager();
    private constructor()
    {

    }


    public static GetInstance(): WebNetManager
    {
        return WebNetManager.instance;
    }


    public Initialize(): void
    {
        window.addEventListener( 'message', function ( e )
        {
            console.log( "OnMessage" )

            if ( e.source != window.parent ) return;

            console.log( e.type )

            let color = new TextureData();
            color.baseTexPath = "123";
            color.normalTexPath = "456";
            window.parent.postMessage( color, '*' );
        }, false );
    }

};
