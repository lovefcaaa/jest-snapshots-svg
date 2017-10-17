import "../../index"

import * as React from "react"
import { View, Text } from "react-native"
import * as renderer from "react-test-renderer"

import { loadFont } from "../../font-loader"

const fs = require("fs")

loadFont(new Uint8Array(fs.readFileSync("/System/Library/Fonts/SFNSText.ttf")).buffer, "Helvetica", "normal", "normal")

// https://facebook.github.io/react-native/docs/flexbox.html

it("Renders a line of text", () => {
  const jsx =
    <View style={{ width: 100 }}>
      <Text>Hello world</Text>
    </View>

  const component = renderer.create(jsx).toJSON()
  expect(component).toMatchSVGSnapshot(320, 480)
})

it("Renders multiple lines of text", () => {
  const jsx =
    <View style={{ width: 100 }}>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend congue faucibus. In eget tortor in odio luctus eleifend. Nullam pretium justo nisi, nec volutpat turpis tempor et.</Text>
    </View>

  const component = renderer.create(jsx).toJSON()
  expect(component).toMatchSVGSnapshot(320, 480)
})
