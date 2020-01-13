import { Pubsub } from './client-updates-pubsub'

/**
 * This interface enables us to use pubslish method from pubsub
 * that accepts incoming value (so we can serialize it)
 * and subscribe method from pubsub that accepts serialized value
 */
type DecoratedPubsub<
  IncomingValue, SerializedValue
> = Omit<Pubsub<IncomingValue>, 'subscribe'> & Pick<Pubsub<SerializedValue>, 'subscribe'>

export class PubsubSerializeDecorator<
  IncomingValue, SerializedValue
> implements DecoratedPubsub<IncomingValue, SerializedValue> {
  private pubsub: Pubsub<SerializedValue>

  private serialize: (value: IncomingValue) => SerializedValue

  constructor(
    pubsub: Pubsub<SerializedValue>,
    serialize: (value: IncomingValue) => SerializedValue,
  ) {
    this.pubsub = pubsub
    this.serialize = serialize
  }

  publish = (value: IncomingValue): void => {
    const serializedValue = this.serialize(value)
    this.pubsub.publish(serializedValue)
  }

  subscribe = (
    subscriber: (val: SerializedValue) => void,
  ): (() => void) => this.pubsub.subscribe(subscriber)
}
