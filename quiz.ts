import { MunicipalQuestion, municipal_list } from "./municipal_question.ts";

export function createQuestions(): MunicipalQuestion[] {
    const questions: MunicipalQuestion[] = [];

    // 登録されてる市町村それぞれのクイズを作成する
    Object.keys(municipal_list).forEach((e) => {
        const question = createQuestion(e);
        questions.push(question);
    });

    return questions;
}

function createQuestion(imgPath: string): MunicipalQuestion {
    // 選択肢リストを作成する
    const correctMunicipalName = municipal_list[imgPath];
    const choices: Array<string> = [correctMunicipalName];

    // 正答以外の市町村名リストを作成する
    const municipalListCopy = { ...municipal_list };
    delete municipalListCopy[imgPath];
    const incorrectMunicipalList = Object.values(municipalListCopy);

    // 誤答を3つ追加する
    for (let i = 0; i < 3; i++) {
        const index = Math.floor(Math.random() * incorrectMunicipalList.length);
        choices.push(incorrectMunicipalList[index]);
    }

    // 選択肢をシャッフルする(Fisher-Yates shuffle)
    for (let i = choices.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [choices[i], choices[j]] = [choices[j], choices[i]];
    }

    // 正答のインデックスを作成する
    const correctIndex: number = choices.findIndex((e) => e == correctMunicipalName);


    const question = { imgPath: imgPath, choices: choices, correctIndex: correctIndex };
    return question;
}