import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import Root from "../../Root";
import CategoryLink from "../CategoryLink";
import DeleteButton from "../DeleteButton";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root initialState={{}}>
      <MemoryRouter>
        <CategoryLink name="Misc" />
      </MemoryRouter>
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("should render a Menu Item", () => {
  expect(wrapped.find(Menu.Item).length).toEqual(1);
});

it("should render a DeleteButton", () => {
  expect(wrapped.find(DeleteButton).length).toEqual(1);
});
