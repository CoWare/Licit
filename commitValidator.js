const fs = require('fs');
const exec = require('child_process').execSync;
const path = require('path');
const protectedBranches = ["master", "develop", "release"];
const branchNames = [
        "fix/#ID_ISSUE/short_description",
        "chore/#ID_ISSUE/short_description",
        "feature/#ID_ISSUE/short_description",
    ];
const commitMessage = "issue #ID_ISSUE | short_description";

const getBranch = () => {
    const currentBranch = exec('git symbolic-ref HEAD 2> /dev/null || git rev-parse --short HEAD 2> /dev/null');
    if (!currentBranch) {
      throw new Error('Can not determine branch');
    }
    return currentBranch.toString().split('\n')[0].replace('refs/heads/', '').toLowerCase();
}

const validateBranchName = () => {
    const branchName = getBranch();
    const issueType = branchName.split('/')[0];
    const issueTypes = branchNames.map(branch => branch.split('/')[0]);

    if (!~protectedBranches.indexOf(branchName)) {
        console.log(`\u001b[42m Perfect Branch\u001b[49m 💪`);
        return true;
    }

    if (branchName.indexOf('/') <= 0) {
        console.log('Invalid branching convention 😂.');
        return false;
    }

    const branchType = issueTypes.filter(type => type === issueType)[0];
    const issueIndex = branchNames[0].split('/').indexOf('#ID_ISSUE');
    const branchID = branchName.split('/')[issueIndex];

    if (!branchType){
      return;
    }

    if (/^\d+$/.test(branchID[issueIndex].replace('#', ''))) {
        console.log(`\u001b[42m Perfect Branch\u001b[49m 💪`);
        return true;
    } else if (issueIndex < 0) {
        console.log('Invalid branch name! Missing "#" in branch name 😂.');
        return false;
    } else if (branchName.indexOf('/#') < 0) {
        console.log(`Invalid branch name! \n Ex: ${branchNames[0]}`);
        return false;

    } else {
        console.log(`Follow the right convention - \n [${branchName[0]}] 😂.`);
        return false;
    }
}

const validateCommitMessage = (msg) => {
    const message = msg.toString();

    if (msg === '') {
        console.log('Commit message cannot be empty 😂');
        return false;
    } else if (message.substring(0, 7) !== 'issue #') {
        console.log(`Remember to start your commit messages with issue # 😂.`);
        return false;
    } else if (!~message.indexOf('|') || !~message.indexOf(' | ')) {
        console.log(`Remember to follow convention [${commitMessage}]. Missing pipe or space inbetween 😂.`);
        return false;
    } else {
        const messageID = message.split(' | ')[0].replace('issue #', '');

        if (/^\d+$/.test(messageID)) {
        console.log(`\u001b[42m Perfect Commit\u001b[49m 💪`);
            return true;
        }
        console.log(`Commit message does not follow [${commitMessage}]. Illegal issue number 😂.`);
        return false;
    }
}

const getCommitMessage = (messageFile) => {
    fs.readFile(messageFile, (err, buffer) => {
      validateBranchName(buffer.toString());
      validateCommitMessage(buffer.toString());
    });
}

if (process.argv && process.argv.length >= 3 && process.argv[2] === 'commit') {
    const messageFile = path.resolve(process.cwd(), '.git/COMMIT_EDITMSG');
    getCommitMessage(messageFile);
}



