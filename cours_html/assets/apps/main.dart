void main() {
  a obj = a();
  obj.age = 12;
  print(obj.age);
}

class a extends b with c {
  int id = 1;
}

class b {
  String fullname = "";
}

class c {
  String name = "";
  int age = 0;
}
