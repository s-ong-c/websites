import * as React from "react";
import { rem } from "polished";
import { styled } from "../gatsby-theme-stitches/stitches.config";

import _Header from "@karrotmarket/gatsby-theme-website/src/components/Header";

const Header = styled(_Header, {
  "header > div": { paddingX: rem(16) },

  "nav > ul": {
    paddingX: rem(24),
    paddingBottom: rem(40),

    "ul > li > a": {
      fontSize: rem(22),
    },

    "li > a": {
      fontSize: rem(26),
    },
  },

  "@sm": {
    fontSize: "initial",
    "nav > ul": {
      padding: 0,
      gap: rem(28),
      "li > a": {
        fontSize: rem(16),
      },
      "ul > li > a": {
        fontSize: rem(18),
      },
    },
  },
});

export default Header;