import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './modules/shared/shared.module';
import { CommandModule } from 'nestjs-command';
import { SeedCommand } from './seed.comand';
@Module({
    imports: [
        MongooseModule.forRoot(process.env.MONGO_URI, { useNewUrlParser: true }),
        AuthModule,
        AdminModule,
        SharedModule,
        CommandModule
    ],
    controllers: [
        
    ],
    providers: [
        SeedCommand
    ],
    exports: [
        
    ]
})
export class MainModule {
    
}
