type Subscriber<T> = (value: T) => void

export interface Pubsub<T> {
  subscribe: (
    subscriber: Subscriber<T>,
  ) => (() => void)
  publish: (value: T) => void
}

export class ClientUpdatesPubsub<T> implements Pubsub<T> {
  private subscribers: Subscriber<T>[] = []

  public subscribe = (
    subscriber: Subscriber<T>,
  ): () => void => {
    this.subscribers.push(subscriber)

    return (): void => this.unsubscribe(subscriber)
  }

  private unsubscribe = (subscriber: Subscriber<T>): void => {
    this.subscribers = this.subscribers.filter((sub) => sub !== subscriber)
  }

  public publish(value: T): void {
    this.subscribers.forEach((sub) => sub(value))
  }
}
