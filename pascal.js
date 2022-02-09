"use strict";

function display_pascal() {
  let count = parseInt(document.getElementById("count").value);
  // add rows to pascal variable as necessary
  for (let i = pascal.length; i < count; i++) {
    pascal.push(next_pascal_line(pascal[i-1]));
  }
  let html = "";
  for (let i = 0; i < count; i++) {
    html += row_html(count - 1 - i, pascal[i]);
  }
  document.getElementById("pascal").innerHTML = html;
}

function row_html(padding, row) {
  let html = "<tr>";
  let end = "</tr>\n";
  if (padding) {
    let pad_html = "<td colspan='" + padding.toString() + "' />"
    html += pad_html;
    end = pad_html + end;
  }
  for (let i = 0; i < row.length; i++) {
    html += cell_html(row[i]);
  }
  return html + end;
}

function cell_html(n) {
  let html = "<td colspan='2' class='";
  // TODO: add classes based on value
  html += "'>" + n.toString() + "</td>";
  return html;
}

function next_pascal_line(prev) {
  let line = [prev[0]];
  for (let i = 1; i < prev.length; i++) {
    line.push(prev[i-1] + prev[i]);
  }
  line.push(prev[prev.length - 1]);
  return line;
}

var pascal = [[1]];