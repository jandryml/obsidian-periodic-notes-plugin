import { Plugin, WorkspaceLeaf } from 'obsidian';
import { ExampleView, VIEW_TYPE_EXAMPLE } from './view/view.js';

// import { CREATE_NOTE, CreateNoteView } from './view/CreateNote';

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerView(VIEW_TYPE_EXAMPLE, (leaf) => new ExampleView(leaf));

    this.addRibbonIcon('dice', 'Activate view', () => {
      this.activateView();
    });


    // this.registerView(CREATE_NOTE, leaf => new CreateNoteView(leaf, this.settings, localeMap[locale]));
  }

  async onunload() {
  }

  async activateView() {
    const { workspace } = this.app;

    let leaf: WorkspaceLeaf | null = null;
    const leaves = workspace.getLeavesOfType(VIEW_TYPE_EXAMPLE);

    if (leaves.length > 0) {
      // A leaf with our view already exists, use that
      leaf = leaves[0];
    } else {
      // Our view could not be found in the workspace, create a new leaf
      // in the right sidebar for it
      leaf = workspace.getRightLeaf(false);
      await leaf.setViewState({ type: VIEW_TYPE_EXAMPLE, active: true });
    }

    // "Reveal" the leaf in case it is in a collapsed sidebar
    workspace.revealLeaf(leaf);
  }
}