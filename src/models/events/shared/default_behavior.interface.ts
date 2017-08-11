
// Opentok Event's default behaviour
// https://tokbox.com/developer/sdks/js/reference/Event.html#isDefaultPrevented

export interface DefaultBehaviour {
  isDefaultPrevented(): boolean;	//Whether the default event behavior has been prevented via a call to preventDefault() (true) or not (false).
  preventDefault(): void;
}
