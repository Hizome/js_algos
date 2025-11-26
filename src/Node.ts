export class ListNode {
  public val: number;
  public next: ListNode|null = null;
  constructor(value: number, next: ListNode | null) {
    this.val = value;
    this.next = next;
  }
}
