function duplicateTd(originalTd) {
    // Obtém a célula de duplicação
    const duplicateCell = document.querySelector('.duplicate-td');

    // Cria uma nova célula na tabela de duplicação
    const newCell = document.createElement('td');
        newCell.innerHTML = originalTd.innerHTML;
    // Remove a célula existente na tabela de duplicação, se houver
    if (duplicateCell.firstChild) {
        duplicateCell.removeChild(duplicateCell.firstChild);
    }

    // Adiciona a nova célula à tabela de duplicação
    duplicateCell.appendChild(newCell);

    // Exibe a tabela de duplicação
    duplicateCell.style.visibility = 'visible';
    for(let i=0; i<3; i++){
        document.getElementsByClassName('legendaDuplicata')[i].style.visibility = 'visible';
    }
}