import { Reservation } from '../model/reservation.model';
import { Database } from './database';

export class ReservationsDataAccess {
  private reservationsDataBase = new Database<Reservation>();

  public async createReservation(reservation: Reservation) {
    const id = await this.reservationsDataBase.insert(reservation);
    return id;
  }

  public async updateReservation(
    reservationId: string,
    field: keyof Reservation,
    value: any
  ) {
    await this.reservationsDataBase.update(reservationId, field, value);
  }

  public async deleteReservation(reservationId: string) {
    await this.reservationsDataBase.delete(reservationId);
  }

  public async getReservation(reservationId: string) {
    const result = await this.reservationsDataBase.findBy('id', reservationId);
    return result;
  }

  public async getAllReservations() {
    const result = await this.reservationsDataBase.findAll();
    return result;
  }
}
