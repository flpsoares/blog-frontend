import { TypedEmitter } from 'tiny-typed-emitter';

export class ModalEvents extends TypedEmitter<{
  currentError: (message: string) => void
}> {}

export default new ModalEvents()
