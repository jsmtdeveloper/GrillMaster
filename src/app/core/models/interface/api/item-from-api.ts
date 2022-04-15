/** This interface has the format of the items recived from the API */
export interface ItemFromApi {
  Id: string;
  $id: string;
  Name: string;
  Length: number;
  Width: number;
  Duration: string;
  Quantity: number;
}
