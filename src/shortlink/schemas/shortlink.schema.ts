import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ShortlinkDocument = Shortlink & Document;

@Schema()
export class Shortlink {
  @Prop()
  full: string;

  @Prop()
  short: string;
}

export const ShortlinkSchema = SchemaFactory.createForClass(Shortlink);
