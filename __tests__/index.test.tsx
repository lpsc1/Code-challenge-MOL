import { formatCellphone, checkIfEmailIsValid } from "../src/pages/utils";
import { render, screen } from '@testing-library/react';
import Home from '../src/pages';

describe('E-mail validation', () => {
  test('Should return true if the email is valid.', () => {
    const email = 'test@test.com';
    expect(checkIfEmailIsValid(email))
      .toBeTruthy();
  }
  )
  test('Should return false if the email is invalid.', () => {
    const email = 'test@.com';
    expect(checkIfEmailIsValid(email))
      .toBeFalsy();
  }
  )
}
);

describe('Cellphone validation', () => {
  test('Should return the cellphone formatted.', () => {
    const cellphone = '65999729314';
    const expectedResult = '(65) 99972-9314'
    expect(formatCellphone(cellphone))
      .toBe(expectedResult);
  }
  )
}
);

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);      
  const heading = screen.getByRole('heading', {
      name: /Novo solicitante/i,
    });
    expect(heading).toBeInTheDocument()
  }
  );
}
);