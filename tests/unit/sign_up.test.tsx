import "@testing-library/jest-dom/extend-expect";
import React from "react";
import SignUpPage from "../../src/pages/sign_up";
import { renderWithApollo } from "../helpers";
import { act, wait, fireEvent } from "@testing-library/react";

describe("Sign up page", () => {
  it("Should have 2 fields", () => {
    const { getByText, getByLabelText } = renderWithApollo(<SignUpPage />);

    expect(getByText("Username")).toHaveAttribute("for");
    expect(getByLabelText("Username")).toHaveValue("");
  });

  it("should create new users", async () => {
    const spy = jest.fn();
    const { getByRole, getByLabelText } = renderWithApollo(<SignUpPage />, {
      Mutation: () => ({
        adduser: spy
      })
    });

    const usernameInput = getByLabelText("Username");
    const passwordInput = getByLabelText("Password");
    fireEvent.change(usernameInput, { target: { value: "asdf" } });
    fireEvent.change(passwordInput, { target: { value: "asdf" } });

    act(() => {
      getByRole("button").click();
    });
    await wait();
    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls[0][1]).toStrictEqual(
      expect.objectContaining({ input: { pswd: "asdf", usrname: "asdf" } })
    );
  });
});
