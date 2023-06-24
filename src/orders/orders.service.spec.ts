import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Order Creation', () => {
    describe('Order Creates normally', () => {
      it('should return id value of the created order.', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

      it('should call save() function in the order-repository', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });
    });

    describe('Check general validation requirement', () => {
      it('should return error if business type user tries to create order', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

      it('should return error if it tries to create order to a restaurant that does not exist', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

      it('should return error if it tries to create order of a menu item that does not exist', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

    });

    describe('Check businsess specific requirement', () => {
      it('should return error if an order consists of more than 10 menu items', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

      it('should return error if an order consists of 0 menu items', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

      it('should return error if the user already have another order that is still processing', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });

      it('should return error if a menu item does not have enough stocks', () => {
        const order = undefined;
        const result = undefined;
        expect(result).toBe(true);
      });
    });

  });
});
