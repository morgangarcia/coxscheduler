import * as modalActions from '../../src/actions/modalActions';

/**
 * A Jest Test Example
 */


describe('Modal Actions', () => {
   it('should create an action to show the modal', () => {
      const slot = {
        time: '0:00',
        name: 'Test Slot',
        phone: 'Test Phone'
      };

      const expectedAction = {
        type: modalActions.SHOW_MODAL,
        payload: {
            slot
        }
      };

      expect(modalActions.showModal(slot)).toEqual(expectedAction);
   });
});
