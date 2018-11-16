import { Engine, Entity } from '../ash';
import { MeshRenderSystem } from '../ECS/System/MeshRenderSystem';
import { MeshComponent } from '../ECS/Component/MeshComponent';
import { ComponentPool } from '../ash/tools/ComponentPool';
import { PostionComponent } from '../ECS/Component/PostionComponent';
import { TextureComponent } from '../ECS/Component/TextureComponent';
import { TextureRenderSystem } from '../ECS/System/TextureRenderSystem';
import { TextureData } from '../ECS/VO/TextureData';
import { Signal1 } from '../ash/signals/Signal1';
import { WebMessageID } from '../WebNetMessage/WebNetMessage';

export class WebNetManager
{
    private static instance: WebNetManager = new WebNetManager();
    private allSignals: Map<WebMessageID, Signal1<any>>;
    private constructor()
    {

    }


    public static GetInstance(): WebNetManager
    {
        return WebNetManager.instance;
    }


    public Initialize(): void
    {
        this.allSignals = new Map<number, Signal1<any>>();
        console.log( "WenNetManager Init" );
        window.addEventListener( 'message', function ( e )
        {
            console.log( "OnMessage" )

            if ( e.source != window.parent ) return;

            WebNetManager.GetInstance().OnWebNetMessage( e.data );

        }, false );
    }


    /**
     * RegisterMessage
     */
    public RegisterMessage( messageID: WebMessageID, listener: any )
    {
        if ( !this.allSignals.has( messageID ) )
        {
            let signal: Signal1<any> = new Signal1<any>();
            this.allSignals.set( messageID, signal );
            signal.add( listener );
        }
    }


    /**
     * UnRegisterMessage
     */
    public UnRegisterMessage( messageID: WebMessageID, listener: any )
    {
        if ( !this.allSignals.has( messageID ) )
            return;

        let signal = this.allSignals.get( messageID );
        signal.remove( listener );
    }

    public SendWebNetMessage( message: any ): void
    {
        if ( window.parent != null && message != null )
            window.parent.postMessage( message, "*" );
    }

    public OnWebNetMessage( message: any ): void
    {
        if ( message == null )
            return;

        let messageID: WebMessageID = message.messageID;

        if ( this.allSignals.has( messageID ) )
        {
            let signal: Signal1<any> = this.allSignals.get( messageID );

            if ( signal != null )
                signal.dispatch( message );
        }
    }
};
