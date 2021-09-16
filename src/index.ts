import Arena2d from "./arena/Arena2d";
import PlainText from "./component/entity/simple/text/PlainText";
import CircleShape from "./component/shape/curved/CircleShape";

if (document === undefined) {
    throw new Error("请在浏览器环境下运行");
}

(<any>window)['Arena2d'] = Arena2d;

(<any>window)['PlainText'] = PlainText;
(<any>window)['Circle'] = CircleShape;
